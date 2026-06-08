import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages.map((msg: any) => ({
        role: msg.role,
        content: msg.content,
      })),
      temperature: 0.7,
      max_tokens: 1000,
      system: 'Du är RikAI, en hjälpsam AI-assistent specialiserad på ekonomi, affärsidéer och marknadsföring. Du svarar på svenska med praktiska, användbara tips och råd.',
    })

    const content = response.choices[0]?.message?.content || 'Jag kunde inte generera ett svar.'

    return NextResponse.json({ content })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Något gick fel' },
      { status: 500 }
    )
  }
}
