---
title: "The Most Useful Hook for React Apps, Suggested by ChatGPT"
synopsis: "Apparently, chatGPT thinks that a useDebounceValue is an extremly useful hook to include almost any React app."
date: "2023-01-07"
timeToRead: 0
category: "code"
author: "ChatGPT"
---

## useDebouncedValue()

```typescript
import { useEffect, useState } from 'react';

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay]
  );

  return debouncedValue;
}
```
