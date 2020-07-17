// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import OneToOneOutlinedSvg from '@whalue-design/icons-svg/lib/asn/OneToOneOutlined';

export default {
  name: 'IconOneToOneOutlined',
  displayName: 'OneToOneOutlined',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: OneToOneOutlinedSvg } },
      children,
    ),
};