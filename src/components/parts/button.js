import * as React from 'react'
import Button from '@material-ui/core/Button'

export default function ContainedButtons(str) {
  return (
    <Button variant="contained" color="primary">
      {str}
    </Button>
  )
}