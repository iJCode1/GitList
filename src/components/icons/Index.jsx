import User from './user';
import Twitter from './twitter';
import Star from './star';
import Search from './search.jsx';
import Location from './location';
import Link from './link';
import Home from './home';
import Heart from './heart';
import Github from './github';
import Check from './check';
import Cancel from './cancel';
import Branch from './branch';
import Book from './book';
import ArrowDown from './arrow-down';

function Index({ icon, ...props }) {
  switch (icon) {
    case 'arrow-down': {
      return <ArrowDown {...props} />
    }
    case 'book': {
      return <Book {...props} />
    }
    case 'branch': {
      return <Branch {...props} />
    }
    case 'cancel': {
      return <Cancel {...props} />
    }
    case 'check': {
      return <Check {...props} />
    }
    case 'github': {
      return <Github {...props} />
    }
    case 'heart': {
      return <Heart {...props} />
    }
    case 'home': {
      return <Home {...props} />
    }
    case 'link': {
      return <Link {...props} />
    }
    case 'location': {
      return <Location {...props} />
    }
    case 'search': {
      return <Search {...props} />
    }
    case 'star': {
      return <Star {...props} />
    }
    case 'twitter': {
      return <Twitter {...props} />
    }
    case 'user': {
      return <User {...props} />
    }
    default: {
      return null
    }
  }
}

Index.defaultProps = {
  size: 16,
  color: 'white',
}

export default Index;