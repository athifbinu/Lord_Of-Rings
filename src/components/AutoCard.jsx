import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function LimitTags({handle}) {
  return (
    <Autocomplete onChange={(e,v)=>handle(v)}
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      renderInput={(params) => (
        <TextField {...params} label="limitTags" placeholder="Favorites" />
      )}
      sx={{ width: '200px' }}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { title: 'Human', },
  { title: 'Dwarf' },
  { title: 'Elf', },

];
