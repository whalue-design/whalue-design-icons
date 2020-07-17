// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RotateLeftOutlinedSvg from '@whalue-design/icons-svg/lib/asn/RotateLeftOutlined';

export default {
  name: 'IconRotateLeftOutlined',
  displayName: 'RotateLeftOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RotateLeftOutlinedSvg } },
      children,
    ),
};