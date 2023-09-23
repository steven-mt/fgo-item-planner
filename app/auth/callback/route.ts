import { Database } from "@/app/types/supabase";
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { AuthError } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (code) {
    const supabase = createRouteHandlerClient<Database>({ cookies });

    try {
      await supabase.auth.exchangeCodeForSession(code);
    } catch (error) {
      if (error instanceof AuthError)
        return NextResponse.redirect(
          new URL(`/#error_description=${error}`, req.url),
        );
      else
        return NextResponse.redirect(
          new URL(`/#error_description=other error: ${error}`),
        );
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(new URL("/", req.url));
}
