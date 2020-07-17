// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import LeftCircleOutlinedSvg from '@whalue-design/icons-svg/lib/asn/LeftCircleOutlined';

export default {
  name: 'IconLeftCircleOutlined',
  displayName: 'LeftCircleOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: LeftCircleOutlinedSvg } },
      children,
    ),
};