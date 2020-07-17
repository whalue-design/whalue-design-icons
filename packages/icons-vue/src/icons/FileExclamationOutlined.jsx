// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileExclamationOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileExclamationOutlined';

export default {
  name: 'IconFileExclamationOutlined',
  displayName: 'FileExclamationOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileExclamationOutlinedSvg } },
      children,
    ),
};