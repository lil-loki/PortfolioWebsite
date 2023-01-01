import React from 'react'
import Prompt from '../Prompt/prompt.component'

export default function History({history}) {
  return (
    <div>
    {history.map((entry, index) => (
        <div key={entry.command + index}>
            <div style={{display:"flex"}}>
                <Prompt />
                {entry.command}
            </div>
            {/* <p style={{ lineHeight: 'normal' }} dangerouslySetInnerHTML={{ __html: entry.output }}>
            </p> */}
            {entry.output}
        </div>

      ))}
    </div>
  )
}
