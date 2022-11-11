
const withTransitionLayout = ({ rect, position, children }) => {
  console.log('rect', rect)
  return <div style={{
    position: 'absolute',
    top: position.offsetTop,
    left: rect.x,
    width: rect.width,
    height: rect.height,
  }}>
    {cloneElement(children, { rect, position, someExtraProp: '' })}
  </div>
}


export function PortalWrapper(props) {
  const { open, children } = props;
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.getElementById('portals');
    setMounted(true);
    return () => {
    }
  }, [])

  useEffect(() => {
    if (!open && ref.current) {
    }
  }, [open])

  return mounted ?
    // <WithModals {...props} />
    // cloneElement(props.children, props)
    createPortal(withTransitionLayout(props), ref.current)
    : null
}

const WithTransition = (props) => {
  console.log('[WithTransition]', props);
  const targeetClone = useRef(null);
  const targetRef = useRef(null);
  const [mounted, setMounted] = useState(false);

  const _cloneTarget = props.children.find((c) => c.type == CloneTarget)

  const Comp = () => cloneElement(props.children[0], {
    someProps: '',
    ref: targetRef,
    onClone: function (e) {

      console.log('_cloneTarget', _cloneTarget)
      setMounted(true);

      const target = targetRef.current;
      const rect = targetRef.current.getBoundingClientRect();
      // targeetClone.current = <PortalWrapper position={{offsetTop: target.offsetTop}} rect={rect} >{props.children}</PortalWrapper>;
      targeetClone.current = <PortalWrapper position={{ offsetTop: target.offsetTop }} rect={rect}>{_cloneTarget}</PortalWrapper>;

    }
  });

  console.log('targeetClone.current', targeetClone.current)

  return <div>
    <Comp {...props} someProps={'some'} />
    {mounted && targeetClone.current}
  </div>;
}


const CloneTarget = (props) => {
  console.log('CloneTarget', props)
  const { rect, position } = props;
  return <div
    style={{
      position: 'absolute',
      top: position.offsetTop,
      left: rect.x,
      width: rect.width,
      height: rect.height,
      backgroundColor: 'gray'
    }}
  >
    appclone
  </div>
}
