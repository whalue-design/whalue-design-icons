// GENERATE BY ./scripts/generate.js
// DON NOT EDIT IT MANUALLY

import Icon from '../components/WvdIcon';
import SlackSquareFilledSvg from '@whalue-design/icons-svg/lib/asn/SlackSquareFilled';

export default {
  name: 'IconSlackSquareFilled',
  displayName: 'SlackSquareFilled',
  functional: true,
  props: { ...Icon.props },
  render: (h, { data, children, props }) =>
    h(
      Icon,
      { ...data, props: { ...data.props, ...props, icon: SlackSquareFilledSvg } },
      children,
    ),
};