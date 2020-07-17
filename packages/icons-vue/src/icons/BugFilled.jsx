// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import BugFilledSvg from '@whalue-design/icons-svg/lib/asn/BugFilled';

export default {
  name: 'IconBugFilled',
  displayName: 'BugFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: BugFilledSvg } },
      children,
    ),
};