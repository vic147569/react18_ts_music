import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, Outlet } from 'react-router-dom'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">Recommend</Link>
        <Link to="/discover/ranking">Ranking</Link>
        <Link to="/discover/playlist">Playlist</Link>
        <Link to="/discover/radio">Radio</Link>
        <Link to="/discover/artist">Artist</Link>
        <Link to="/discover/album">Album</Link>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
