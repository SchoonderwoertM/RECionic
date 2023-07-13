import { InspectionModel } from "@/models/InspectionModel";

export async function GetInspectionsList() {
  const result = [];
  try {
    const response = await fetch(
      "https://api.jsonbin.io/v3/b/648ed6fc8e4aa6225eb0471c",
      {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key":
            "$2b$10$xGY57xK/yyF20/AcOpvLJuWh3MnrWeuQZG60ykSCOe49wS5oQ0tw.",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    const jsonData = await response.json();
    const inspections = jsonData.record.inspectionData;
    inspections.sort(function(a, b){
      return new Date(a.inspections.date) - new Date(b.inspections.date);
  });

    for (let i = 0; i < inspections.length; i++) {
      result.push(
        new InspectionModel(inspections[i].id, inspections[i].address, inspections[i].inspections)
      );
    }

    return result;
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

