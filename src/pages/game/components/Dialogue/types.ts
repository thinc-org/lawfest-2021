export interface DialogueProps {
  variant?: 'primary' | 'secondary'
  name: string
  children: string
  onClick?: () => void
}
