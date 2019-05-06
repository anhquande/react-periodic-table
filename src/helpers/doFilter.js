export function doFilter(elements, filter) {
  let result = elements
  if (filter.radioactive){
    result = elements.filter(e=>e.Radioactive === 'yes')
  }

  return result
}
