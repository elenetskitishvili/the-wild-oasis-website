export const metadata = {
  title: "Guest area",
};

export default async function Page() {
  const session = await auth();
  return (
    <h2 className="font-semibold text-2xl text-accent-400 mb-7">
      Welcome, Elene
    </h2>
  );
}
