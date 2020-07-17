// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BehanceCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/BehanceCircleFilled';

export default {
  name: 'IconBehanceCircleFilled',
  displayName: 'BehanceCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BehanceCircleFilledSvg } },
      children,
    ),
};