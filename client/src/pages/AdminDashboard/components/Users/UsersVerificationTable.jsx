import Badge from "../ui/badge";

// // Assuming mockVerificationRequests might be passed as a prop or fetched
// // For now, using a similar structure to the original page, but this should be made dynamic
// const mockVerificationRequestsData = [
//   {
//     id: 1003, // Example, ideally this comes from props
//     name: "Pierre Leroy",
//     email: "pierre.leroy@email.com",
//     date: "13 Nov 2024",
//     avatar: "/placeholder.svg",
//     avatarFallback: "PL",
//   },
//   // Add more request objects if needed, or expect this data via props
// ];

export default function UsersVerificationTable({ verificationUsers }) {
  // In a real app, totalPending might also be a prop or derived from `requests.length`
  const totalPending =
    verificationUsers.length > 0 ? "156 demandes" : "0 demandes";

  if (verificationUsers.length === 0) {
    return (
      <div className="rounded-lg  bg-white text-black border-0 shadow-sm">
        <div>
          <h3 className="text-lg font-semibold">
            Demandes de Vérification en Attente
          </h3>
        </div>
        <div>
          <p className="text-sm text-gray-500">
            Aucune demande de vérification en attente.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-0 shadow-sm">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-lg font-semibold">
          Demandes de Vérification en Attente
        </h3>
        <Badge className="bg-orange-100 text-orange-800">{totalPending}</Badge>
      </div>
      <div>
        <div className="space-y-4">
          {verificationUsers.map((request) => (
            <div
              key={request.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center gap-3">
                avatar
                <div>
                  <p className="font-medium text-gray-900">{request.name}</p>
                  <p className="text-sm text-gray-500">ID: {request.id}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">{request.email}</p>
                <p className="text-sm text-gray-500">{request.date}</p>
              </div>
              <div className="flex gap-2">
                <button className="bg-green-600 hover:bg-green-700 size-sm">
                  Approuver
                </button>
                <button className="size-sm bg-red-600 hover:bg-red-700">
                  Rejeter
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
