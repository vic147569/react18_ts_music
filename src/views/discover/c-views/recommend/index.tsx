// import httpRequest from '@/service'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

// interface IDataRoot {
//   bannerBizType: string
//   encodeId: string
//   exclusive: boolean
//   imageUrl: string
//   scm: string
//   targetId: number
//   targetType: number
//   titleColor: string
//   typeTitle: string
// }

const Recommend: FC<IProps> = () => {
  // const [banners, setbanners] = useState<IDataRoot[]>([])

  // useEffect(() => {
  //   httpRequest.get({ headers: {}, url: '/banner' }).then((res) => {
  //     setbanners(res.banners)
  //   })
  // }, [])

  return (
    <div>
      {/* {banners.map((item) => {
        return <div key={item.scm}>{item.typeTitle}</div>
      })} */}
    </div>
  )
}

export default memo(Recommend)
