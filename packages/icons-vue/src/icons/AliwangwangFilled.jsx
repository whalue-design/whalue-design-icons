// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import AliwangwangFilledSvg from '@whalue-design/icons-svg/lib/asn/AliwangwangFilled';

export default {
  name: 'IconAliwangwangFilled',
  displayName: 'AliwangwangFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: AliwangwangFilledSvg } },
      children,
    ),
};