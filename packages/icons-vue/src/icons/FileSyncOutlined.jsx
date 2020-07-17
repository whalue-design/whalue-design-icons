// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileSyncOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileSyncOutlined';

export default {
  name: 'IconFileSyncOutlined',
  displayName: 'FileSyncOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileSyncOutlinedSvg } },
      children,
    ),
};