import Events from "@/models/model";
import Connect from "@/util/connect";
import { NextResponse} from "next/server";

export async function GET() {
    await Connect()
    const data = await Events.find({});
    return NextResponse.json({ data }, { status: 200 });
}