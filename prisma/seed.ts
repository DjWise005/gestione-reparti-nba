import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Seeding database...')

  // Aziende Esterne
  const externalCompanies = [
    { nome: 'Autocarrozzeria F.lli Bassani', tipo: 'CARROZZERIA' as const, attiva: true },
    { nome: 'Cecchin Guerrino', tipo: 'CARROZZERIA' as const, attiva: true },
    { nome: 'Eurocar di Bassani Graziano', tipo: 'CARROZZERIA' as const, attiva: true },
    { nome: 'Carrozzeria Vignole', tipo: 'CARROZZERIA' as const, attiva: true },
    { nome: 'Ceccato Carrozzeria Srl', tipo: 'CARROZZERIA' as const, attiva: true },
    { nome: 'Carrozzeria Cismon', tipo: 'CARROZZERIA' as const, attiva: true },
    { nome: 'Newcar Carrozzeria di Melzani Gianpaolo sas', tipo: 'CARROZZERIA' as const, attiva: true },
    { nome: 'Auto Art SRL', tipo: 'LAVORI_TERZI' as const, attiva: true, note: 'Tirabolli' },
    { nome: 'FC WORKS di Filippo Cassol', tipo: 'LAVORI_TERZI' as const, attiva: true, note: 'Wrapping' },
    { nome: 'Tras-Auto SRL', tipo: 'LOGISTICA' as const, attiva: true, note: 'Logistica trasporti' },
  ]

  console.log('📦 Creating external companies...')
  for (const company of externalCompanies) {
    await prisma.externalCompany.create({ data: company })
  }
  console.log(`✅ Created ${externalCompanies.length} external companies`)
  console.log('🎉 Seeding completed!')
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })