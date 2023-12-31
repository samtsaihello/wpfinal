// import { useEffect, useState } from "react";

// import { useSession } from "next-auth/react";
// import { useParams, useRouter } from "next/navigation";

// import { useDebounce } from "use-debounce";

// import { pusherClient } from "@/lib/pusher/client";
// import type { Document, User } from "@/lib/types/db";

// type PusherPayload = {
//   senderId: User["id"];
//   document: Document;
// };

// export const useDocument = () => {
//   const { docId } = useParams();
//   const documentId = Array.isArray(docId) ? docId[0] : docId;

//   const [document, setDocument] = useState<Document | null>(null);
//   const [dbDocument, setDbDocument] = useState<Document | null>(null);
//   const router = useRouter();

//   const { data: session } = useSession();
//   const userId = session?.user?.id;

//   useEffect(() => {
//     const updateDocument = async () => {
//       if (!debouncedDocument) return;
//       // [NOTE] 2023.11.18 - This PUT request will trigger a pusher event that will update the document to the other clients.
//       const res = await fetch(`/api/documents/${documentId}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           title: debouncedDocument.title,
//           content: debouncedDocument.content,
//         }),
//       });
//       if (!res.ok) {
//         return;
//       }
//       const data: Document = await res.json();
//       // Update the navbar if the title changed
//       if (debouncedDbDocument?.title !== data.title) {
//         router.refresh();
//       }
//       setDbDocument(data);
//     };
//     updateDocument();
//   }, [debouncedDocument, documentId, router, debouncedDbDocument, isSynced]);

//   // Subscribe to pusher events
//   useEffect(() => {
//     if (!documentId) return;
//     // Private channels are in the format: private-...
//     const channelName = `private-${documentId}`;

//     try {
//       const channel = pusherClient.subscribe(channelName);
//       channel.bind(
//         "doc:update",
//         ({ senderId, document: received_document }: PusherPayload) => {
//           if (senderId === userId) {
//             return;
//           }
//           // [NOTE] 2023.11.18 - This is the pusher event that updates the dbDocument.
//           setDocument(received_document);
//           setDbDocument(received_document);
//           router.refresh();
//         },
//       );
//     } catch (error) {
//       console.error(error);
//       router.push("/docs");
//     }

//     // Unsubscribe from pusher events when the component unmounts
//     return () => {
//       pusherClient.unsubscribe(channelName);
//     };
//   }, [documentId, router, userId]);

//   useEffect(() => {
//     if (!documentId) return;
//     const fetchDocument = async () => {
//       const res = await fetch(`/api/documents/${documentId}`);
//       if (!res.ok) {
//         setDocument(null);
//         router.push("/docs");
//         return;
//       }
//       const data = await res.json();
//       setDocument(data);
//       setDbDocument(data);
//     };
//     fetchDocument();
//   }, [documentId, router]);

//   const title = document?.title || "";
//   const setTitle = (newTitle: string) => {
//     if (document === null) return;
//     setDocument({
//       ...document,
//       title: newTitle,
//     });
//   };

//   const content = document?.content || "";
//   const setContent = (newContent: string) => {
//     if (document === null) return;
//     setDocument({
//       ...document,
//       content: newContent,
//     });
//   };

//   return {
//     documentId,
//     document,
//     title,
//     setTitle,
//     content,
//     setContent,
//   };
// };
