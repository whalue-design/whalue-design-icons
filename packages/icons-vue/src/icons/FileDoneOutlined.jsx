// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import FileDoneOutlinedSvg from '@whalue-design/icons-svg/lib/asn/FileDoneOutlined';

export default {
  name: 'IconFileDoneOutlined',
  displayName: 'FileDoneOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: FileDoneOutlinedSvg } },
      children,
    ),
};