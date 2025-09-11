import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import { promises as fs } from 'fs'

export async function GET(
  request: NextRequest,
  { params }: { params: { masterId: string } }
) {
  try {
    const masterId = params.masterId
    const filePath = path.join(process.cwd(), 'src', 'data', 'masters', `${masterId}.json`)
    
    const fileContent = await fs.readFile(filePath, 'utf8')
    const masterData = JSON.parse(fileContent)
    
    return NextResponse.json(masterData)
  } catch (error) {
    console.error('Error loading master data:', error)
    return NextResponse.json({ error: 'Master not found' }, { status: 404 })
  }
}
