import { NextResponse } from "next/server";

const API_URL = "https://fakestoreapi.com/products";
export async function GET() {
  try {
    const re = await fetch(API_URL);
    const lst = await re.json();
    return NextResponse.json(lst);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Error",
    });
  }
}
