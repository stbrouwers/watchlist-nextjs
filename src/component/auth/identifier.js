import { NextResponse } from 'next/headers'

async function Create(identifier) {
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
}

export function Set(identifier) {
    const response = NextResponse.next()

    response.cookies.set({
        name: 'personal_identifier',
        value: identifier,
        path: '/',
    })
}