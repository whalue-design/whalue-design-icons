// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import RightCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/RightCircleFilled';

export default {
  name: 'IconRightCircleFilled',
  displayName: 'RightCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: RightCircleFilledSvg } },
      children,
    ),
};