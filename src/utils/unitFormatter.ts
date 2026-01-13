export function unitFormatter(value: number) : string {
  return value.toLocaleString('en-US',{
    notation: 'compact',
    compactDisplay: 'short'
  })
}