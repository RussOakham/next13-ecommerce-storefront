import getBillboard from '@/actions/getBillboard'
import Billboard from '@/components/billboard'
import Container from '@/components/ui/container'

const HomePage = async () => {
  const billboard = await getBillboard('36440a91-865f-47cb-82b4-df436e4303b0')

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  )
}

export default HomePage
