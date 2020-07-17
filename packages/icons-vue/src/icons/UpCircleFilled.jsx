// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import UpCircleFilledSvg from '@whalue-design/icons-svg/lib/asn/UpCircleFilled';

export default {
  name: 'IconUpCircleFilled',
  displayName: 'UpCircleFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: UpCircleFilledSvg } },
      children,
    ),
};