import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 220 333" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <g id={`${id}-path`}>
          <path d="M2 4C2 2.89543 2.89543 2 4 2H60.4315C61.536 2 62.4315 2.89543 62.4315 4V216.007C62.4315 216.327 62.3547 216.642 62.2077 216.926L46.1794 247.899C45.533 249.148 43.8331 249.357 42.9029 248.302L2.49975 202.472C2.1777 202.107 2 201.636 2 201.149V4Z" stroke="black" stroke-width="3"/>
          <path d="M218 4C218 2.89543 217.105 2 216 2H159.569C158.464 2 157.569 2.89543 157.569 4V216.007C157.569 216.327 157.645 216.642 157.792 216.926L173.821 247.899C174.467 249.148 176.167 249.357 177.097 248.302L217.5 202.472C217.822 202.107 218 201.636 218 201.149V4Z" stroke="black" stroke-width="3"/>
          <path d="M141.793 4.24114C141.793 3.13657 140.898 2.24114 139.793 2.24114H80.6921C79.5876 2.24114 78.6921 3.13657 78.6921 4.24114V218.075C78.6921 218.383 78.6207 218.687 78.4835 218.964L57.0444 262.149C56.7027 262.837 56.7856 263.661 57.2578 264.267L108.44 329.996C109.235 331.017 110.776 331.026 111.582 330.013L163.924 264.285C164.414 263.67 164.498 262.826 164.139 262.126L142.014 218.973C141.869 218.691 141.793 218.378 141.793 218.061V4.24114Z" stroke="black" stroke-width="3"/>
        </g>
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 220 330"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M2 4C2 2.89543 2.89543 2 4 2H60.4315C61.536 2 62.4315 2.89543 62.4315 4V216.007C62.4315 216.327 62.3547 216.642 62.2077 216.926L46.1794 247.899C45.533 249.148 43.8331 249.357 42.9029 248.302L2.49975 202.472C2.1777 202.107 2 201.636 2 201.149V4Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M218 4C218 2.89543 217.105 2 216 2H159.569C158.464 2 157.569 2.89543 157.569 4V216.007C157.569 216.327 157.645 216.642 157.792 216.926L173.821 247.899C174.467 249.148 176.167 249.357 177.097 248.302L217.5 202.472C217.822 202.107 218 201.636 218 201.149V4Z"
        stroke="black"
        strokeWidth="3"
      />
      <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M141.793 4.24114C141.793 3.13657 140.898 2.24114 139.793 2.24114H80.6921C79.5876 2.24114 78.6921 3.13657 78.6921 4.24114V218.075C78.6921 218.383 78.6207 218.687 78.4835 218.964L57.0444 262.149C56.7027 262.837 56.7856 263.661 57.2578 264.267L108.44 329.996C109.235 331.017 110.776 331.026 111.582 330.013L163.924 264.285C164.414 263.67 164.498 262.826 164.139 262.126L142.014 218.973C141.869 218.691 141.793 218.378 141.793 218.061V4.24114Z"
        stroke="black"
        strokeWidth="3"
      />
    </svg>
  )
}
