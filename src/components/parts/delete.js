import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'

export default function IconButtons() {
  return (
    <div>
      <IconButton aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </div>
  );
}