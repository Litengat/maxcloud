const url = "http://localhost:3010/";

export async function GET(
  request: Request,
  { params }: { params: { filepath: string } }
) {
  const response = await fetch(`${url}file/getfileURL/${params.filepath}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-cache",
  });
  return response.body;
}
