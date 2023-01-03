export type DefaultButtonProps = {
    /** outline 점선 여부 */
    dash?: boolean;
    /** 사이즈 */
    size?: 'tiny' | 'xs' | 's' | 'm' | 'l';
    /** 로딩 여부 */
    loading?: boolean;
    /** 왼쪽에 아이콘 노출 */
    leftIcon?: React.ReactNode | null;
    /** 오른쪽에 아이콘 노출 */
    rightIcon?: React.ReactNode | null;
    /** 버튼 텍스트 및 아이콘 */
    children?: React.ReactNode | null;
  } & React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement>;
  
  export type ButtonProps = {
    /** 링크 경로 */
    href?: string;
    /** 형태 설정 */
    theme?:
      | 'primary'
      | 'ghost'
      | 'success'
      | 'error'
  } & DefaultButtonProps;