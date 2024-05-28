import { NextResponse } from 'next/server'

export async function Create(identifier) {
    try {
        const response = await fetch(
            `https://aminoclashgemsgenerator.shop/api/v1/identifiers?=${identifier}`,
            {
                method: "POST"
            }
        );
        if (!response.ok) {
            console.log("Error: Network response was not ok", response.statusText);
            return;
        }
        const Data = await response.json();
        console.log(Data);
        Set(Data.identifier)
        return Data;
    } catch {
        console.error("Error fetching identifier", error);
        return null;
    }
}

export function Set(identifier) {
    const response = NextResponse.next()

    response.cookies.set({
        name: 'personal_identifier',
        value: identifier,
        path: '/',
    })
}

export async function Get(identifier) {
    try {
        const response = await fetch(
            `https://aminoclashgemsgenerator.shop/api/v1/identifiers/${identifier}`,
            {
                method: "GET"
            }
        );
        if (!response.ok) {
            console.log("Error: Network response was not ok", response.statusText);
            return null;
        }
        const data = await response.json();
        return data;
    } catch(error) {
        console.error("Error fetching identifier", error);
        return null;
    }
}

export {};