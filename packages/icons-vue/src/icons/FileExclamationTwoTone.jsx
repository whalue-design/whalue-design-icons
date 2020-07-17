// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileExclamationTwoToneSvg from '@whalue-design/icons-svg/lib/asn/FileExclamationTwoTone';

export default {
  name: 'IconFileExclamationTwoTone',
  displayName: 'FileExclamationTwoTone',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileExclamationTwoToneSvg } },
      children,
    ),
};