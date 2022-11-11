import _ from 'lodash';
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'


const activeFields = (object) => {
  const _returnObj = {};

  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const element = object[key];
      if (element) {
        _returnObj[key] = element;
      }
    }
  }

  return _returnObj
}

export default function useFilter({
  list,
  filterOptions: _initialOptions
}) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const _originalList = [...list];
  let _lastFilter = useRef([..._originalList]);
  const [filterList, setFilterList] = useState(list);
  const [filterOptions, setFilterOptions] = useState(_initialOptions);
  const activeOptions = useRef(_initialOptions);

  console.log('--- list', _originalList)

  const data = useMemo(() => {
    // if (!list.length) { return [] }

    let filteredList = _originalList;

    for (const op in filterOptions) {
      if (Object.hasOwnProperty.call(filterOptions, op)) {
        const element = filterOptions[op];
        if (element.value) {
          filteredList = filteredList.filter((i, key) => {

            if (element.value) {

                // const _eval = element.condition
              //   .replace(`{{${element.targetField}}}`, isInt(i[element.targetField]) ? i[element.targetField] : "'" + i[element.targetField] + "'")
              //   .replace('{{value}}', isInt(element.value) ? element.value : "'" + element.value + "'");
              // return !!eval(_eval)

              // console.log('object', element);

              return element.filter({...i, key}, element);
              // return element.filter(i, element);
            }


          })
        }

      }
    }

    // console.log('----------filterList', filterList)
    return filterList
  }, [_originalList, filterList, filterOptions]);

  useEffect(() => {
    if (!list.length) { return }
    let filteredList = _originalList;
    
    for (const op in filterOptions) {
      if (Object.hasOwnProperty.call(filterOptions, op)) {
        const element = filterOptions[op];
        if (element.value) {
          filteredList = filteredList.filter((i) => {
            if (i[element.targetField] && element.value) {

              // const _eval = element.condition
              //   .replace(`{{${element.targetField}}}`, isInt(i[element.targetField]) ? i[element.targetField] : "'" + i[element.targetField] + "'")
              //   .replace('{{value}}', isInt(element.value) ? element.value : "'" + element.value + "'");
              // return !!eval(_eval)

              // console.log('object', element);

              return element.filter(i, element);
            }
          })
        }

      }
    }

    setFilterList(filteredList);

    activeOptions.current = filterOptions;
    // updateField('somefiled');
  }, [filterOptions, list.length]);

  useEffect(() => {
    // _lastFilter.current = filterList;
  }, [filterList]);


  const updateField = (field, options) => {
    let filteredList = _originalList;

    // console.log('_lastFilter', filterOptions)

    for (const field in filterOptions) {

      if (Object.hasOwnProperty.call(filterOptions, field)) {
        const element = filterOptions[field];
        // console.log('-', field, element)
        if (element) {
          if (field == 'name') {
            filteredList = filteredList.filter((c) => c[field].match(element))
          } else {
            filteredList = filteredList.filter((i, k) => i.id <= element)
          }
        }

      }
    }


    // _originalList = filteredList;
    setFilterList(filteredList)
    // console.log('_lastFilter', _lastFilter.current)
  }

  const setFilter = (e, key, value) => {
    if (typeof e === 'function') {
      const cb = e({ filterOptions, filterList });
      // console.log('cb', cb)
      // console.log('---', e({ filterOptions, filterList }))
      // filterOptions['filter'] = 15
      // setFilterList(cb);
      // setFilterOptions({ ...filterOptions, [key]: value })
      return;
    }

    const returnField = { ...filterOptions };

    for (const field in e) {
      if (Object.hasOwnProperty.call(e, field)) {
        const filterValue = e[field];
        returnField[field] = { ...filterOptions[field], value: filterValue }
        setFilterOptions({ ...returnField });
      }
    }

    return filterOptions
  }

  const commit = (name, value, cb) => {
    if (typeof cb === 'function') {
      const _cb = cb({ filterOptions: { ...filterOptions, [name]: value }, filterList });
      setFilterOptions({ ...filterOptions, [name]: value });
      setFilterList(_cb)
      return _cb;
    }
  }

  const reset = () => {
    _lastFilter = _originalList;
    setFilterOptions(_initialOptions);
    setFilterList(_originalList);
  }

  return {
    filteredList: data,
    initial: _originalList,
    reset: reset,
    setFilter,
    commit,
    options: filterOptions
  }
}
