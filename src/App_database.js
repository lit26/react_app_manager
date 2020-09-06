import Home from './components/Home'

// apps
import youtube_clone from './apps/youtube_clone/src/App'
import google_clone from './apps/google_clone/src/App'

export const apps = [
  {
    "title": "Home",
    "path": "",
    "description": "",
    "app": Home
  },
  {
    "title": "youtube_clone",
    "path": "/youtube_clone",
    "description": "A React.js website that clones the Youtube styling.",
    "app": youtube_clone
  },
  {
    "title": "google_clone",
    "path": "/google_clone",
    "description": "A React.js website that clones the Google styling.",
    "app": google_clone
  }
]
export default apps;