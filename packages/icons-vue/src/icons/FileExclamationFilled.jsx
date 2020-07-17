// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileExclamationFilledSvg from '@whalue-design/icons-svg/lib/asn/FileExclamationFilled';

export default {
  name: 'IconFileExclamationFilled',
  displayName: 'FileExclamationFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileExclamationFilledSvg } },
      children,
    ),
};