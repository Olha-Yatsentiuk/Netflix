import React from 'react';
import { FavouritesContainer } from '../containers/FavouritesContainer';
import { useContent } from '../hooks';
import { selectionFilter } from '../utils';

export default function Browse() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionFilter({ series, films });

  return <FavouritesContainer slides={slides} />;
}