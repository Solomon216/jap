import Events from "@/models/model";
import Connect from "@/util/connect";
import { NextResponse} from "next/server";

export async function GET(req,res) {
    const ids = res.params.id;

    await Connect()
    const data = await Events.find({id : ids});
    return NextResponse.json({ data }, { status: 200 });
}