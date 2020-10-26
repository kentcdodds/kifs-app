import React from 'react'
import {useRouteData} from '@remix-run/react'
import {useQuery} from 'react-query'
import {ErrorBoundary, useErrorHandler} from 'react-error-boundary'
import {matchSorter} from 'match-sorter'

// console.log({React, useRouteData, useQuery})

export function meta() {
  return {
    title: 'Kifs Directory',
    description: 'KCD Gifs you can use on the KCD Discord',
  }
}

const getGiphyUrl = gifLink =>
  `https://i.giphy.com/${gifLink.split('/').pop().split('-').pop()}.mp4`

const listFormat = new Intl.ListFormat('en-US', {
  style: 'long',
  type: 'conjunction',
})

function Index() {
  const [search, setSearch] = React.useState('')
  // const [{data, error}] = useRouteData()

  // useErrorHandler(error)

  return 'hello'
}
/*

  const kifs = matchSorter(
    Object.entries(data).map(([key, kif]) => ({key, ...kif})),
    search,
    {keys: ['key', 'aliases', 'emojiAliases']},
  )

  return (
    <div
      style={{
        maxWidth: `calc(900px + 10vw)`,
        margin: 'auto',
        padding: '0 5vw',
      }}
    >
      <div>
        <h1 style={{textAlign: 'center'}}>Kifs Directory</h1>
        <em style={{textAlign: 'center', display: 'block'}}>
          A list of available kifs (Kent Gifs)
        </em>
      </div>
      <div>
        <h2>How to use this page</h2>
        <p>
          In{' '}
          <a href="https://kentcdodds.com/discord">KCD Community on Discord</a>
          {', '}you can send a "kif" using the KCD Bot command:{' '}
          <code>?kif</code>. For example: <code>?kif amazed</code> would send{' '}
          <a href="https://giphy.com/gifs/sunglasses-amazed-kentcdodds-IZ2eI0akSxm0R0k50g">
            the "amazed" kif
          </a>
          {'. '} And sending <code>?kif 👊 @kentcdodds</code> would send{' '}
          <a href="https://giphy.com/gifs/fist-bump-kentcdodds-x7kQjh9VItHviGkVvv">
            the "fist bump" kif
          </a>{' '}
          to <code>@kentcdodds</code>.
        </p>
        <p>
          This directory just makes it easier to know what kifs are available.
          Click/tap on any of these and the command to send it will be copied to
          your clipboard.
        </p>
      </div>
      <div>
        <form onSubmit={e => e.preventDefault()}>
          <input
            style={{width: '100%'}}
            onChange={event => setSearch(event.target.value)}
            type="search"
            placeholder="Search kifs"
            aria-label="Search kifs"
            value={search}
            autoFocus="heck yah"
          />
        </form>
      </div>
      <ul
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, 200px)',
          justifyContent: 'center',
          gap: 20,
          listStyle: 'none',
          paddingTop: 30,
          paddingBottom: 30,
          paddingLeft: 0,
          margin: 0,
        }}
      >
        {kifs.map(({key, gif, aliases = [], emojiAliases = []}) => (
          <li
            key={key}
            style={{maxHeight: 200, maxWidth: 200, cursor: 'pointer'}}
            onClick={() => {
              const text = `?kif ${key}`
              navigator.clipboard.writeText(text).then(
                () => alert(`copied "${text}" to clipboard`),
                () => alert('error copying'),
              )
            }}
          >
            <video
              autoPlay
              loop
              muted
              style={{display: 'block', width: '100%'}}
              alt={key}
              src={getGiphyUrl(gif)}
            />
            <div>
              <strong>{key}</strong>
              <br />
              <small>{listFormat.format([...aliases, ...emojiAliases])}</small>
            </div>
          </li>
        ))}
      </ul>
      <div style={{padding: 20, display: 'flex', justifyContent: 'center'}}>
        <small>
          Created with 💙 by Kent C. Dodds in ~10 minutes. Feel free to{' '}
          <a href="https://github.com/kentcdodds/kifs/issues/3">
            make it better
          </a>
        </small>
      </div>
    </div>
  )
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: '50px',
      }}
    >
      <p>Oh no! Something went wrong!</p>
      <div>
        <p>{`Here's the error:`}</p>
        <pre
          style={{
            color: 'red',
            overflowY: 'scroll',
            whiteSpace: 'break-spaces',
          }}
        >
          {error.message}
        </pre>
      </div>
      <div>
        <p>Try doing one of these things to fix this:</p>
        <ol>
          <li>
            <button onClick={resetErrorBoundary}>Rerender the app</button>
          </li>
          <li>
            <button onClick={() => window.location.reload()}>
              Refresh the page
            </button>
          </li>
        </ol>
      </div>
    </div>
  )
}
*/

export default Index
