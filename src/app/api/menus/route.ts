import { NextResponse } from 'next/server';
import { menus } from './menu-items';

// To handle a GET request to /api/menus
export async function GET() {
  // Here you can place logic to deliver user's role specific menus
  return NextResponse.json(menus, { status: 200 });
}
