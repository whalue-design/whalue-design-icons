// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import QqOutlinedSvg from '@whalue-design/icons-svg/lib/asn/QqOutlined';

export default {
  name: 'IconQqOutlined',
  displayName: 'QqOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: QqOutlinedSvg } },
      children,
    ),
};