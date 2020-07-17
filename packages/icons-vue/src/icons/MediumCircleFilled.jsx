// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import MediumCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/MediumCircleFilled';

export default {
  name: 'IconMediumCircleFilled',
  displayName: 'MediumCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: MediumCircleFilledSvg } },
      children,
    ),
};