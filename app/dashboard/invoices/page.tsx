import { fetchLatestInvoices } from "@/app/lib/data";

export default async function Page() {
    const latestInvoices = await fetchLatestInvoices();
    return <p>Invoices Page</p>;
}