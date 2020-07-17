// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SkypeFilledSvg from '@whalue-design/icons-svg/lib/asn/SkypeFilled';

export default {
  name: 'IconSkypeFilled',
  displayName: 'SkypeFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SkypeFilledSvg } },
      children,
    ),
};