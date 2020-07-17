// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import HeartOutlinedSvg from '@whalue-design/icons-svg/lib/asn/HeartOutlined';

export default {
  name: 'IconHeartOutlined',
  displayName: 'HeartOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: HeartOutlinedSvg } },
      children,
    ),
};